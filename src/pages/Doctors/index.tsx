import styles from "./doctors.module.scss";
import { doctors } from "../../shared/mocks/doctors.mocks";
import { ReactComponent as EditIcon } from "../../shared/assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../shared/assets/icons/delete.svg";

const Doctors = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список врачей</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th><h2 className={styles.th}>Имя врача</h2></th>
            <th><h2 className={styles.th}>Опыт</h2></th>
            <th><h2 className={styles.th}>Специальность</h2></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.name}>
              <td className={styles.nameCell}>
                <span className={styles.avatar} style={{background: doc.avatar}} />
                <p className={styles.name}>{doc.name}</p>
              </td>
              <td><p>{doc.experience}</p></td>
              <td><p>{doc.profile}</p></td>
              <td className={styles.actions}>
                <button className={styles.iconBtn}>
                  <EditIcon width={18} height={18} />
                </button>
                <button className={styles.iconBtn}>
                  <DeleteIcon width={18} height={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
