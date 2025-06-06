import styles from './Footer.module.css';

function Footer() {
  return (
    <footer aria-label="Site Footer" className={styles.footer}>
      <p>&copy; 2025 Andrea Marletta. Released under the{ ' ' } 
        <a 
          href="https://github.com/andrea-marletta/todo-list/blob/main/LICENSE"   target="_blank" rel="noopener noreferrer">
         MIT License
        </a>
      .
      </p>
      <p>
        <a 
          href="https://github.com/andrea-marletta/todo-list" 
          target="_blank" 
          rel="noopener noreferrer">
          View source on GitHub
        </a>
        .
      </p>
      <p>Built with React.</p>
      <p>This site does not collect personal data or use tracking cookies.</p>
      <p>This website is designed to be accessible to everyone, including people with disabilities.</p>
    </footer>
  );
}

export default Footer;