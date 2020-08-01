import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
const MONTHS=["Jan","Feb", "Mar","Apr", "May","Jun", "Jul","Aug", "Sep","Oct", "Nov","Dec"];
//bien

    function getFormatDate(date) {
        let splitDate = date.split("-", 3);
        let month = MONTHS[splitDate[2].substring(0, 1)];
        return month + " " + splitDate[1] + ", " + splitDate[0];
    }

    function renderComments(comments) {
        let commentList;
        commentList = comments.map((commentl) => <ul className="list-unstyled">
            <li>{commentl.comment}</li>
            <li>-- {commentl.author}, {getFormatDate(commentl.date)}</li>
        </ul>);
        return commentList;
    }
    const DishDetail = (props) => {
        console.log(props.selectdDish);
        const dish = props.selectdDish;

        if (props.selectdDish != null) {
            const comment = Array.from(dish.comments);
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle id='header'><b>{dish.name}</b></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4><b>Comments</b></h4>
                        {renderComments(comment)}
                    </div>
                </div>
                </div>
            );
        } else {
            return (
                <div>

                </div>
            );
        }
    }

export default DishDetail;