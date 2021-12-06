//Styles
import './Banner.scss'

export default function Banner() {
    return (
        <section className="banner" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: 'url(images/copacabana.jpg)'
        }}>
            <div className="banner-transition"></div>
        </section>
    );
}