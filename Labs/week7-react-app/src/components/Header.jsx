
export default function Header({ img }) {
  return (
    <header>
      <img
        src={img.src}
        alt={img.alt}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover"
        }}
      />
    </header>
  );
}
