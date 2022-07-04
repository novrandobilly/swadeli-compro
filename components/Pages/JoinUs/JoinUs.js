import styles from "./JoinUs.module.scss";
import Image from "next/image";
import png1 from "../../../assets/png-joinus-1.png";
import png2 from "../../../assets/png-joinus-2.png";
import png3 from "../../../assets/png-joinus-3.png";

function JoinUs() {
  return (
    <div className={styles['container']}>
      <div>
        <div className={styles['image-1']}>
          <Image
            width={480}
            height={850}
            src={png1}
          />
        </div>
        <div className={styles['image-2']}>
          <Image
            width={920}
            height={751}
            src={png2}
          />
        </div>
        <div className={styles['image-3']}>
          <Image
            width={600}
            height={431}
            src={png3}
          />
        </div>
      </div>
    </div>
  )
}

export default JoinUs