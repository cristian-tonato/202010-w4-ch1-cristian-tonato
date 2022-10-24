import { useState } from "react";

interface IGentlemanCard {
  id: number;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
  data: any;
  setData: any;
}

export function GentlemanCard({
  id,
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
  selected,
  data,
  setData,
}: IGentlemanCard) {
  const [visible, setVisible] = useState(true);

  function deSelectOne(testID: number) {
    const newState = [...data];
    newState.forEach((item: any) => {
      if (item.id === testID && item.selected === true) {
        item.selected = false;
      }
    });
    return setData(newState);
  }

  if (visible) {
    return (
      <>
        <li className="gentleman" id={id.toString()}>
          <div className="gentleman__avatar-container">
            <img
              className="gentleman__avatar"
              src={picture}
              alt={alternativeText}
            />
            <span className="gentleman__initial">{name[0]}</span>
          </div>
          <div className="gentleman__data-container">
            <h2 className="gentleman__name">{name}</h2>
            <ul className="gentleman__data-list">
              <li className="gentleman__data">
                <span className="gentleman__data-label">Profession:</span>
                {profession}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Status:</span> {status}
              </li>
              <li className="gentleman__data">
                <span className="gentleman__data-label">Twitter:</span>{" "}
                {twitter}
              </li>
            </ul>
          </div>
          <i
            className="icon gentleman__icon fas fa-check"
            style={{
              display: selected ? "block" : "none",
            }}
          >
            ✔️
          </i>
          <i
            className="icon gentleman__icon gentleman__icon--delete fas fa-times"
            onClick={() => {
              setVisible(false);
              deSelectOne(id);
            }}
          >
            ❌
          </i>
        </li>
      </>
    );
  } else {
    return <></>;
  }
}
