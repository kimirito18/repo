export default function Home() {
  return (
    <main style={{
      fontFamily: "sans-serif",
      padding: "40px",
      textAlign: "center"
    }}>
      <h1>あたらしいシステムを勉強！</h1>
      <p>これはシンプルな静的ページです。</p>

      <hr style={{ margin: "30px 0" }} />

      <section>
        <h2>自己紹介</h2>
        <p>僕はメガネっ娘が大好きです！</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>リンク</h2>
        <a href="https://example.com">外部サイトへ</a>
      </section>
    </main>
  );
}