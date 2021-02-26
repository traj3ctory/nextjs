import Head from "next/head";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

/**
 * @author Traj3ctory
 * @function Details
 **/

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Traj3ctory | List</title>
        <meta name="keywords" content="traj3ctory" />
      </Head>
      <div className="content">
        <Card className="shadow border-0">
          <Card.Header>
            <h3>{ninja.name}</h3>
          </Card.Header>
          <Card.Body className="p-3">
            <ListGroup variant="flush">
              <ListGroup.Item>{ninja.name}</ListGroup.Item>
              <ListGroup.Item>{ninja.email}</ListGroup.Item>
              <ListGroup.Item>{ninja.website}</ListGroup.Item>
              <ListGroup.Item>{ninja.address.city}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Details;
