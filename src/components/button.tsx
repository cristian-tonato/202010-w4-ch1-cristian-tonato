export function Button({ data, selectAll }: any) {
  let pointingGentlemen = 0;

  data.forEach((item: any) => {
    if (item.selected === true) {
      pointingGentlemen++;
    }
  });

  return (
    <>
      <section className="controls">
        <p className="info">{pointingGentlemen} gentlemen pointing at you</p>
        <button
          className="button button--select"
          onClick={() => {
            selectAll();
          }}
        >
          Select all
        </button>
      </section>
    </>
  );
}
