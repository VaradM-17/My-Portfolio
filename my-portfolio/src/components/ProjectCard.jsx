import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ProjectCard = (props) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <Card className="shadow project-card h-100">
        <Card.Img
          variant="top"
          src={props.projectImage}
          className="project-card-img"
        />
        <Card.Body className="p-4 d-flex flex-column">
          <Card.Title className="fw-bold text-uppercase mb-3 fs-5 text-center">
            {props.projectName}
          </Card.Title>
          <Card.Text className="mb-4">{props.projectDescription}</Card.Text>
          {props.link && (
            <div className="text-center mt-auto">
              <Button
                className="shadow text-capitalize"
                variant="outline-primary"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
