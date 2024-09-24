import { useEffect } from "react";
interface IAddress {
  Number: string;
  Description: string;
  SettlementDescription: string;
}
interface INovaPoshtaSearch {
  deliver: string | undefined;
  setStateAddress: React.Dispatch<React.SetStateAction<boolean>>;
  setConstAddress: React.Dispatch<React.SetStateAction<IAddress | undefined>>;
  typeDeliver: string;
  setDeliver: React.Dispatch<React.SetStateAction<string | undefined>>;
  setAddress: React.Dispatch<React.SetStateAction<IAddress[] | undefined>>;
  isEnter: boolean;
}

export function NovaPoshtaSearch({
  deliver,
  setStateAddress,
  setConstAddress,
  typeDeliver,
  setAddress,
  isEnter,
}: INovaPoshtaSearch) {
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (isEnter) {
        return;
      }
      if (typeof deliver === "string" && typeDeliver === "нова почта") {
        const wordPart = deliver.match(/[а-яА-ЯіїєґІЇЄҐ]+/g)?.join("") || "";
        const numberPart = parseInt(deliver.match(/\d+/g)?.join("") || "0", 10);
        setStateAddress(true);
        setConstAddress(undefined);
        await fetch("https://api.novaposhta.ua/v2.0/json/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            apiKey: "0aab254867b1b4b8aea5abf2ebce14d9",
            modelName: "AddressGeneral",
            calledMethod: "getWarehouses",
            methodProperties: {
              CityName: `${wordPart}`,
              WarehouseId: `${numberPart}`,
              Limit: "3",
            },
          }),
        })
          .then((data) => data.json())
          .then((res) => {
            const arr = res.data.map((elem: IAddress) => {
              return {
                Number: elem.Number,
                Description: elem.Description,
                SettlementDescription: elem.SettlementDescription,
              };
            });
            setAddress(arr);
          });
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [deliver]);
}
