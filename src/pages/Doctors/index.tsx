import styles from "./doctors.module.scss";
import { doctors } from "../../shared/mocks/doctors.mocks";
import EditIcon from "../../shared/icons/EditIcon";
import DeleteIcon from "../../shared/icons/DeleteIcon";

const Doctors = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Список врачей</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Имя врача</th>
            <th>Опыт</th>
            <th>Специальность</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.name}>
              <td className={styles.nameCell}>
                <span className={styles.avatar} style={{background: doc.avatar}} />
                <span className={styles.name}>{doc.name}</span>
              </td>
              <td>{doc.experience}</td>
              <td>{doc.profile}</td>
              <td className={styles.actions}>
                <button className={styles.iconBtn}><EditIcon /></button>
                <button className={styles.iconBtn}><DeleteIcon /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Doctors;
