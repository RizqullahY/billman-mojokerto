import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Pembacaan Meter',
    Svg: require('@site/static/img/pembacaan.svg').default,
    description: (
      <>
        Melakukan pembacaan meter pelanggan secara akurat dan tepat waktu
        sebagai dasar perhitungan tagihan listrik setiap bulan.
      </>
    ),
  },
  {
    title: 'Penagihan & Pemberitahuan Tagihan',
    Svg: require('@site/static/img/penagihan.svg').default,
    description: (
      <>
        Melaksanakan penagihan kepada pelanggan pascabayar serta memberikan
        pemberitahuan tagihan dan jatuh tempo pembayaran secara langsung.
      </>
    ),
  },
  {
    title: 'Pemutusan Sementara',
    Svg: require('@site/static/img/pemutusan.svg').default,
    description: (
      <>
        Melakukan pemutusan sementara aliran listrik sesuai prosedur
        terhadap pelanggan yang belum menyelesaikan kewajiban pembayaran.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
