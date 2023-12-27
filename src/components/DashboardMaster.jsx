import Link from "next/link";
import { FaBlog, FaBuffer, FaMendeley } from "react-icons/fa6";
export default function DashboardMaster(props) {
  return (
    <main>
      <section className="relative ">
        <div className=" flex gap-[30px]">
          <div className="w-[350px] h-screen">
            <div className="px-4 py-5 border-r border-gray-300 h-screen">
              <div className="text-[#0766AD] font-bold text-4xl uppercase">
                <a href="/">
                  MY <span className="text-[#29ADB2]">Dash</span>{" "}
                </a>
              </div>
              <br />
              <nav>
                <ul>
                  <li>
                    <Link className="navLink" href="/dashboard">
                      <FaBuffer /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" href="/dashboard/product">
                      <FaBlog /> Product
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="w-full">{props.children}</div>
        </div>
      </section>
    </main>
  );
}
