import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link to="/dashboard" style={styles.link}>Dashboard</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/edit" style={styles.link}>Edit</Link>
                </li>
                <li style={styles.li}>
                    <Link to="/delete" style={styles.link}>Delete</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        padding: '10px',
        backgroundColor: '#333',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
    },
    li: {
        display: 'inline',
        padding: '0 15px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navigation;
