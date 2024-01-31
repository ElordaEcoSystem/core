import Link from "next/link";

export const Header = () => {
  return (
    <header
      id="menu"
      className="border-b border-prime h-16 flex justify-center items-center"
    >
      <div className="container flex justify-between">
        <Link href="/" className="text-prime font-bold text-2xl">
          {/* <img src="./assets/img/logo.png" alt="" /> */}
          EES
        </Link>
        <nav className="flex justify-center">
          <ul className="flex gap-9 text-prime font-semibold text-base items-center">
            <Link href="/about">Об организации</Link>
            <Link href="/press_center">Пресс-центр</Link>
            <Link href="/procurement">Закупки</Link>
            <Link href="/jobs">Вакансии</Link>
            <Link href="compliance">Антикоррупционный комплаенс</Link>
          </ul>
        </nav>
        <div className=" text-prime font-semibold text-2xl">
          <div>ru</div>
        </div>
      </div>
    </header>
  );
};
