interface imgsPathProps {
  arrayLength: number;
  imgExt: ".svg" | ".png" | ".jpg";
  imgName: string;
  srcFolder?: "icons" | "img";
}

const imgsMap = ({
  arrayLength,
  imgExt,
  imgName,
  srcFolder = "img",
}: imgsPathProps) => {
  const imgsArray = Array.from({ length: arrayLength }, (_, index) => {
    const path = require(`@/app/assets/${srcFolder}/${imgName}${
      index + 1
    }${imgExt}`) as string;

    return JSON.parse(JSON.stringify(path));
  });

  return imgsArray;
};
export default imgsMap;
