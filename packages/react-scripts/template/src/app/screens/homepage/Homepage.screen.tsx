import React from 'react';
import { Link } from 'react-router-dom';

import styles from './homepage.scss';

const HomepageScreen: React.SFC = () => {
    return <div className={styles.container}>
        <Link to="/dashboard" className={styles.goToDashboard}>
            Go to dashboard!
        </Link>
    </div>;
};

export default HomepageScreen;