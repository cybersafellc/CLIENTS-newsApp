import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Cards from "../../../components/Cards";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import React from "react";
import sound from "./../../../Assets/sound/X2Download.app - NOTIFICATION BELL - Sound Effect (128 kbps).mp3";

const News = () => {
  const inputanText = useRef(null);
  const [data, setData] = useState([]);
  const [jumlahData, setJumlahData] = useState(null);
  const audioRef = useRef(null);
  useEffect(() => {
    axios
      .get(`https://server-news-app.vercel.app/all-news`)
      .then((ress) => {
        setData(ress.data.data);
      })
      .catch((err) => {
        console.log(`error disaat mengambil semua postingan : ${err}`);
      });
  });

  const handleSentMessage = () => {
    if (inputanText.current.value == "") {
      alert("Kolom pesan tidak boleh kosong");
    } else {
      axios
        .post(`http://server-news-app.vercel.app/post-news`, {
          title: sessionStorage.getItem("name"),
          text_value: inputanText.current.value,
        })
        .then((ress) => {
          if (ress) {
            inputanText.current.value = "";
          }
        })
        .catch((err) => {
          console.log(`error disaat memposting : ${err}`);
        });
    }
  };

  useEffect(() => {
    setJumlahData(data.length);
  }, [data]);
  useEffect(() => {
    audioRef.current.play();
  }, [jumlahData]);
  return (
    <>
      <audio controls ref={audioRef} className="audio">
        <source src={sound} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div className="border p-3 py-5 rounded-0 shadow container-news">
        <Container>
          <Row className="g-3">
            {data.map((d) => (
              <Col xs="12" key={d?.id}>
                <Cards title={d.title} date={d?.date} value={d?.text_value} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="message-wrapper border shadow bg-secondary bg-opacity-50">
        <input
          ref={inputanText}
          type="text"
          className="p-2 px-3 focus-ring focus-ring-light"
          placeholder="Message"
        />
        <Button
          className="bg-danger border-danger d-flex align-items-center justify-content-center gap-1"
          onClick={handleSentMessage}
        >
          <span className="d-none d-md-block">Sent</span>
          <i class="bx bxl-telegram pt-1"></i>
        </Button>
      </div>
    </>
  );
};
export default News;
