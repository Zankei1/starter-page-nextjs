import { Presentation } from "../components/presentation";
import styles from "./login.module.scss";

export default function Login() {
    return (
        <main className={styles.mainBackground}>
            <div className={styles.content}>
                <Presentation />
            </div>
        </main>
    );
}
