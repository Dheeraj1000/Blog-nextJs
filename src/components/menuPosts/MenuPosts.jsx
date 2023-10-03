import Link from 'next/link'
import React from 'react'
import styles from './menuPosts.module.css'
import Image from 'next/image'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link href='/' className={styles.item}>
        {withImage && (
            <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.travel}`}>
          Travel
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (
            <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.style}`}>
        Style
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (
            <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.fashion}`}>
          Fashion
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (
            <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.food}`}>
          Food
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (
            <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.culture}`}>
          Culture
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={styles.item}>
    {withImage && (
            <div className={styles.imageContainer}>
             <Image src='/p1.jpeg' alt='hi'  height={52} width={52} className={styles.image}/>
            </div>
        )}
      <div className={styles.container}>
        <span className={`${styles.category} ${styles.coding}`}>
          Coding
        </span>
        <h3 className={styles.postTitle}>
           Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.date}> - 30.09.2023</span>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default MenuPosts