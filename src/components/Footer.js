
import "../styles/layouts/footer.css"

export const Footer = ()=>{
    return( 
    <footer className="flex-column-center pd-sm">
        <p className="mg-bottom-xsm">Made by SriSakthi</p>
        <div className="footer-links mg-bottom-xsm">
        <a className="mg-xsm fs-sm-plus" href=""  target="_blank" rel="noreferrer"
            ><i className="fab fa-facebook"></i
        ></a>
        <a
            className="mg-xsm fs-sm-plus"
            href=""
            target="_blank" rel="noreferrer"
            ><i className="fab fa-whatsapp-in"></i
        ></a>
        <a className="mg-xsm fs-sm-plus" href=""  target="_blank" rel="noreferrer"
            ><i className="fab fa-twitter"></i
        ></a>
        </div>
        <p className="copyright mg-bottom-xsm">© 2023 SriSakthi </p>
  </footer>
  );
}
