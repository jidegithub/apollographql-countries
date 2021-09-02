import Layout from '../../components/layout/'
import styles from "../../styles/Home.module.css";
import ClientOnly from "../../components/client-only/ClientOnly";
import CountriesQuery from "../../components/countries-query/CountriesQuery";
import SearchBar from '../../components/searchbar/SearchBar';
import Pagination from '../../components/pagination';

export default function ClientSide() {
  return (
    <Layout title="Client-side">
      <main className={styles.main}>
        <h1 className={styles.title}><a href="#welcome-to-next-js" aria-hidden="true" className="aal_anchor" id="welcome-to-next-js"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
          Welcome to Countries App!
        </h1>
        <SearchBar/>
        <ClientOnly>
          <CountriesQuery />
        </ClientOnly>
      </main>

      <footer className="">
        <Pagination/>
      </footer>
    </Layout>
  );
}
