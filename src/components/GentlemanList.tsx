import { GentlemanCard } from "./GentlemanCard";

export function GentleMenList(props: any) {
  const renderThreeGentlemen = props.data.map((gentleman: any) => (
    <GentlemanCard
      id={gentleman.id}
      name={gentleman.name}
      status={gentleman.status}
      profession={gentleman.profession}
      twitter={gentleman.twitter}
      picture={gentleman.picture}
      alternativeText={gentleman.alternativeText}
      selected={gentleman.selected}
      key={gentleman.id}
      data={props.data}
      setData={props.setData}
    />
  ));

  return (
    <>
      <ul className="gentlemen">{renderThreeGentlemen}</ul>
    </>
  );
}
