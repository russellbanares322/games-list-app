import React, { useContext, useState, useEffect } from "react";
import { Col, Form, Row, Image } from "react-bootstrap";
import { PacmanLoader, RingLoader } from "react-spinners";
import GamesDisplay from "./GamesDisplay";
import ReactPaginate from "react-paginate";
import logo from "../images/logo.png";
import { GameContext } from "../context/GameContext";
import ThemeToggle from "./ThemeToggle";

const GamesData = () => {
  const { data, isLoading, isDarkMode } = useContext(GameContext);
  const [color] = useState("#EAE800");
  const [currentItems, setCurrentItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 6;

  //Pagination
  useEffect(() => {
    setLoading(false);
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    setLoading(true);
    setTimeout(() => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
      window.scroll(0, 0);
    }, 1000);
  };

  const currentItemsSearchFilter = (value) => {
    if (searchTerm === "") {
      return value;
    } else if (
      value.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      value.genre.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      value.developer.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    ) {
      return value;
    }
  };

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "13rem",
          }}
        >
          <PacmanLoader size={79} color={color} />
        </div>
      ) : (
        <>
          <div>
            <Image src={logo} className="logo" />
          </div>
          <div className="d-flex justify-content-end">
            <ThemeToggle />
          </div>
          <h1
            className={
              !isDarkMode
                ? "text-center pt-5 title_text_dark"
                : "text-center pt-5 title_text_light"
            }
            style={{ fontSize: "4rem" }}
          >
            Games List
          </h1>
          <div className="mx-auto d-flex justify-content-center pt-5">
            <div></div>
            <Col sm={5}>
              <Form.Control
                type="search"
                placeholder="Search game..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  borderRadius: "3rem",
                  height: "2.8rem",
                }}
                autoFocus
              />
            </Col>
          </div>
          {loading ? (
            <div className="d-flex justify-content-center my-5">
              <RingLoader size={80} color={color} />
            </div>
          ) : (
            <>
              <Row xl={3} lg={3} md={2} sm={1}>
                {currentItems
                  .filter(currentItemsSearchFilter)
                  .map((gameData) => (
                    <Col
                      key={gameData.id}
                      className="d-flex justify-content-center"
                    >
                      <GamesDisplay data={gameData} />
                    </Col>
                  ))}
              </Row>
            </>
          )}
          <Col sm={12} style={{ paddingBottom: "2rem" }}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName={
                !isDarkMode ? "page_num_dark" : "page_num_light"
              }
              previousLinkClassName={
                !isDarkMode ? "page_num_dark" : "page_num_light"
              }
              nextLinkClassName={
                !isDarkMode ? "page_num_dark" : "page_num_light"
              }
              activeLinkClassName={
                !isDarkMode ? "page_active_dark" : "page_active_light"
              }
            />
          </Col>
        </>
      )}
    </>
  );
};

export default GamesData;
