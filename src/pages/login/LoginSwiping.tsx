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
    <div className="flex items-center flex-col  justify-center w-full ">
      <div className="mb-10 header-h3 pt-20 ">
        <p>{title} </p>
        {title2 && <p>{title2}</p>}
      </div>

      <div className={`mb-10 ${title2 ? "-mt-5" : "mb-1"}`}>
        <img
          src="/src/assets/images/image.png"
          alt="캐릭터img"
          className="size-50  aspect-square object-cover"
        />
      </div>

      <div className="header-h5 mb-9 max-w-60 ">
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}
