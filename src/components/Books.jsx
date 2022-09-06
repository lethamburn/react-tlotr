import { useEffect, useState } from "react";
import { API } from "../services/API";
const Books = () => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const getBooksAndChapters = async () => {
      const books = await API.get("/book");
      setBooks(books.data.docs);
      const chapters = await API.get("/chapter");
      setChapters(chapters.data.docs);
      setLoading(false);
    };
    getBooksAndChapters();
  }, []);

  if (loading) {
    return <div>Loading books..</div>;
  }

  return (
    <section className="books" id="books">
      <h2>Books</h2>
      <div className="gallery">
        {books.map((book) => (
          <figure key={book._id} className={book.name.split(" ").join("")}>
            <h3>{book.name}</h3>
            <div>
              {chapters.map((chapter, i) => {
                if (chapter.book === book._id) {
                  return (
                    <figcaption key={chapter._id}>
                      {i + 1}. {chapter.chapterName}
                    </figcaption>
                  );
                }
                return null;
              })}
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Books;
