import { useEffect, useRef, useState } from 'react';

const emptyForm = { name: '', company: '', email: '', consent: false, website: '' };

export function AxelMaterialsForm() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('idle');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [error, setError] = useState('');
  const pending = useRef(false);
  const controller = useRef(null);
  const mounted = useRef(true);
  const successTitle = useRef(null);

  useEffect(() => {
    mounted.current = true;
    return () => { mounted.current = false; controller.current?.abort(); };
  }, []);
  useEffect(() => () => { if (downloadUrl) URL.revokeObjectURL(downloadUrl); }, [downloadUrl]);
  useEffect(() => { if (status === 'success') successTitle.current?.focus(); }, [status]);

  const change = event => {
    const { name, value, checked, type } = event.target;
    setForm(previous => ({ ...previous, [name]: type === 'checkbox' ? checked : value }));
  };
  const submit = async event => {
    event.preventDefault();
    if (pending.current) return;
    if (!form.name.trim() || !form.company.trim() || !form.email.trim() || !form.consent) {
      setError('お名前・会社名・メールアドレスを入力し、個人情報の取り扱いに同意してください。');
      setStatus('error');
      return;
    }
    pending.current = true;
    setStatus('sending');
    setError('');
    controller.current = new AbortController();
    const timeout = window.setTimeout(() => controller.current?.abort(), 30000);
    try {
      const response = await fetch('/api/axel-materials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name.trim(), company: form.company.trim(), email: form.email.trim(), consent: form.consent, website: form.website }),
        signal: controller.current.signal,
      });
      if (!response.ok || !response.headers.get('content-type')?.toLowerCase().includes('application/pdf')) throw new Error('request_failed');
      const pdf = await response.blob();
      if (!pdf.size) throw new Error('empty_pdf');
      if (!mounted.current) return;
      setDownloadUrl(URL.createObjectURL(pdf));
      setForm(emptyForm);
      setStatus('success');
    } catch (_) {
      if (!mounted.current) return;
      setError('資料請求を受け付けできませんでした。入力内容は残っています。時間をおいて、もう一度送信してください。');
      setStatus('error');
    } finally {
      window.clearTimeout(timeout);
      pending.current = false;
    }
  };

  return <section id="materials" className="axel-request" aria-labelledby="materials-title"><div className="cl-container axel-request__layout">
    <div className="axel-request__intro"><p className="axel-request__eyebrow">アクセルの資料請求</p><h2 id="materials-title">しくみづくりを、<br />もう少し詳しく。</h2><p>アクセルの支援内容や進め方をまとめた事業資料です。<br />お名前・会社名・メールアドレスをご入力いただくと、送信後にダウンロードできます。</p><ul><li>AI・自動化で支援できること</li><li>データベース整備と業務の見直し</li><li>設計から運用までの進め方</li></ul><p className="axel-request__format">PDF / 18ページ / 約2.7MB</p></div>
    <div className="axel-request__form-wrap">
      {status === 'success' ? <div className="axel-request__success"><h3 ref={successTitle} tabIndex="-1">資料をご用意しました。</h3><p>資料請求ありがとうございます。<br />下のボタンからダウンロードしてください。</p><a className="friendly-button axel-request__download" href={downloadUrl} download="アクセル事業資料_Classless.pdf">資料をダウンロード<span aria-hidden="true">↓</span></a><p className="axel-request__note">この画面を閉じる前に、資料を保存してください。</p></div>
        : <form onSubmit={submit} aria-busy={status === 'sending'}>
          <div className="axel-request__field"><label htmlFor="axel-name">お名前<span>必須</span></label><input id="axel-name" name="name" autoComplete="name" required maxLength="100" value={form.name} onChange={change} placeholder="山田 太郎" disabled={status === 'sending'} /></div>
          <div className="axel-request__field"><label htmlFor="axel-company">会社名・団体名<span>必須</span></label><input id="axel-company" name="company" autoComplete="organization" required maxLength="200" value={form.company} onChange={change} placeholder="個人の方は「個人」とご記入ください" disabled={status === 'sending'} /></div>
          <div className="axel-request__field"><label htmlFor="axel-email">メールアドレス<span>必須</span></label><input id="axel-email" name="email" type="email" autoComplete="email" required maxLength="254" value={form.email} onChange={change} placeholder="you@example.com" disabled={status === 'sending'} /></div>
          <div className="axel-request__trap" aria-hidden="true"><label htmlFor="axel-website">Website</label><input id="axel-website" name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={change} /></div>
          <p className="axel-request__purpose">ご入力いただいた情報は、資料提供およびお問い合わせへの対応に利用します。</p>
          <label className="axel-request__consent"><input type="checkbox" name="consent" required checked={form.consent} onChange={change} disabled={status === 'sending'} /><span><a href="/privacy" target="_blank" rel="noopener noreferrer">プライバシーポリシー（別タブ）</a>を確認し、個人情報の取り扱いに同意します。</span></label>
          <button className="friendly-button axel-request__submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? '送信しています…' : '送信して資料を受け取る'}</button>
          {error && <p className="axel-request__error" role="alert">{error}</p>}
          <p className="axel-request__note">資料の受付が完了すると、ダウンロードボタンが表示されます。</p>
        </form>}
    </div>
  </div></section>;
}
