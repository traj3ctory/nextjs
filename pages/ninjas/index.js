import Head from "next/head";
import Link from "next/link";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

/**
 * @author traj3ctory
 * @function Ninja
 **/

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Traj3ctory | List</title>
        <meta name="keywords" content="traj3ctory" />
      </Head>
      <h1>Ninja Listing</h1>
      <Row>
        <Col lg={6} md={8} sm={12} className="mx-auto">
          <Card className="shadow border-0">
            <ListGroup variant="flush">
              {ninjas.map((ninja) => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                  <a>
                    <ListGroup.Item className="list" key={ninja.id}>
                      {ninja.name}
                    </ListGroup.Item>
                  </a>
                </Link>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Ninja;
