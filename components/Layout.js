import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css' 



function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main classname={styles.main}>
                    <Header />
                    {children}

                </main>
            </div>
        </>
    )
}

Layout.propTypes = { 

}

export default Layout

