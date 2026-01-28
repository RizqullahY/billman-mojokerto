import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pembacaan Meter',
    imgSrc: 'https://raw.githubusercontent.com/RizqullahY/billman-mojokerto/refs/heads/master/static/img/pembacaan.png',
    description: (
      <>
        Melakukan pembacaan meter pelanggan secara akurat dan tepat waktu
        sebagai dasar perhitungan tagihan listrik setiap bulan.
      </>
    ),
  },
  {
    title: 'Penagihan & Pemberitahuan Tagihan',
    imgSrc: 'https://raw.githubusercontent.com/RizqullahY/billman-mojokerto/refs/heads/master/static/img/penagihan.png',
    description: (
      <>
        Melaksanakan penagihan kepada pelanggan pascabayar serta memberikan
        pemberitahuan tagihan dan jatuh tempo pembayaran secara langsung.
      </>
    ),
  },
  {
    title: 'Pemutusan Sementara',
    imgSrc: 'https://raw.githubusercontent.com/RizqullahY/billman-mojokerto/refs/heads/master/static/img/pemutusan.png',
    description: (
      <>
        Melakukan pemutusan sementara aliran listrik sesuai prosedur
        terhadap pelanggan yang belum menyelesaikan kewajiban pembayaran.
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
