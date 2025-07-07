interface LoginProps {
  title: string;
  title2?: string;
  text1: string;
  text2: string;
}

export default function LoginSwiping({
  title,
  title2,
  text1,
  text2,
}: LoginProps) {
  return (
    <div className="flex items-center flex-col  justify-center w-full">
      <div className="mb-10 header-h3 pt-14 h-17 ">
        <p>{title} </p>
        <p>{title2} </p>
      </div>
      <div className=" mb-10  mt-10">
        <img
          src="/src/assets/images/image.png"
          alt="캐릭터img"
          className="size-50  aspect-square"
        />
      </div>
      <div className="header-h5 mb-12 max-w-60">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
