<script lang="ts">
  import Icon from './shared/components/Icon.svelte'

  let windowMode: 'login' | 'register' | null = null

  interface Book {
    starCount: number
    posterUrl: string
    viewCount: number
    title: string
  }

  const books: Book[] = [
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/51c-tuESgdL._SX379_BO1,204,203,200_.jpg',
      title: 'Programming Rust',
      starCount: 4.5,
      viewCount: 1100
    },
    {
      posterUrl: 'https://cdn1.ozone.ru/s3/multimedia-2/6012014246.jpg',
      title: 'Повелитель мух',
      starCount: 5,
      viewCount: 1100
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/51c-tuESgdL._SX379_BO1,204,203,200_.jpg',
      title: 'Programming Rust',
      starCount: 4.5,
      viewCount: 1100
    },
    {
      posterUrl: 'https://images-na.ssl-images-amazon.com/images/I/51c-tuESgdL._SX379_BO1,204,203,200_.jpg',
      title: 'Programming Rust',
      starCount: 4.5,
      viewCount: 1100
    }
  ]

</script>

<svelte:head>
  <style>
    body {
      margin: 0;
      padding: 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</svelte:head>

<main class="main">
  <section class="recommended-books-container">
    <h1 class="main-title">Что хотите почитать?</h1>
    <div class="recommended-books">
      <div class="filter">
        <ul class="filter-list">
          <li>Популярные</li>
          <li>Все книги</li>
        </ul>
      </div>

      <div class="books-container">
        <ul class="book-list">
          {#each books as book}
            <li>
              <div class="poster">
                <img src={book.posterUrl}>
              </div>
              <div class="book-info">
                <h3 class="book-info-title">{book.title}</h3>
                <div class="rating-container">
                  <Icon name="star" size="11px"/>
                  <span>{book.starCount}</span>
                </div>
                <div class="view-count">
                  <Icon name="eye" size="11px"/>
                  <span>{book.viewCount}</span>
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
</main>

<style>
  .main-title {
    font-size: 3em;
    margin-top: 0;
  }

  .recommended-books-container {
    padding: 1rem;
    background-color: #4b28e6;
    color: #fff;
    margin-bottom: 6rem;
  }

  .filter {
    margin-bottom: 1rem;
  }

  .filter-list,
  .book-list {
    margin: 0;
    padding: 0;
  }

  .filter-list {
    list-style: none;
    display: flex;
  }

  .filter-list li:not(:last-child) {
    margin-right: 1rem;
  }

  .books-container {
    overflow-x: auto;
    padding-bottom: 1rem;
    margin-right: -1rem;
  }

  .book-list {
    display: flex;
    list-style: none;
  }

  .book-list li {
    display: flex;
    background-color: #fff;
    color: #000;
    padding: 0.5rem;
    border-radius: 15px;
  }

  .book-list li:not(:last-child) {
    margin-right: 1rem;
  }

  .book-list li .poster {
    width: 100px;
    margin-right: 1rem;
  }

  .poster img {
    border-radius: 15px;
  }

  .book-info-title {
    margin-top: 0;
  }

  .rating-container,
  .view-count {
    display: flex;
    align-items: center;
  }

  .rating-container .icon-container {
    width: 11px;
  }
</style>
