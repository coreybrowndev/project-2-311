import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-14 w-full border-b px-8">
      <div>Cards</div>
      <div>
        <nav>
          <ul className="flex gap-5">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/cards"}>
              <li>Cards</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
