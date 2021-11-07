import styles from '../styles/Home.module.css'
import React from 'react';
import useGeolocation from 'hooks/geolocation';

export default function Home() {
  const geolocation = useGeolocation();

  return (
    <div className={styles.container}>
      <main>
        {`You are at ${geolocation.latitude}, ${geolocation.longitude}`}
      </main>
    </div>
  )
}
