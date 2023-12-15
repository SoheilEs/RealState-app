import styles from "@/modules/Sidebar.module.css";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import { categories } from "@/utils/constants";
function Sidebar() {

  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {categories.map((i, index) => (
        <Link
          key={index}
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(i) },
          }}
        >
          {Object.values(i)}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
