


export const eventGoogle = ({ action,  id,city, value }: {city?:string, action: string;  id?: string[]|string; value?: number }) => {
    (window as any).gtag('event', action, {
      city:city,
      id: id,
      value: value,
    });
  };