import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
const MONTHS=["Jan","Feb", "Mar","Apr", "May","Jun", "Jul","Aug", "Sep","Oct", "Nov","Dec"];

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectdDish: props
        };
    }
    getFormatDate(date) {
        let splitDate = date.split("-", 3);
        console.log("date recibido" + typeof date);
        console.log("date split" + splitDate);
        let month = MONTHS[splitDate[2].substring(0, 1)];
        return month + " " + splitDate[1] + ", " + splitDate[0];
    }

    renderComments(comments) {
        let commentList;
        commentList = comments.map((commentl) => <ul class="list-unstyled">
            <li>{commentl.comment}</li>
            <li>-- {commentl.author}, {this.getFormatDate(commentl.date)}</li>
        </ul>);
        return commentList;
    }
    render() {
        console.log(this.props.selectdDish);
        const dish = this.props.selectdDish;

        if (this.props.selectdDish != null) {
            const comment = Array.from(dish.comments);
            console.log(comment);
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle header><b>{dish.name}</b></CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4><b>Comments</b></h4>
                        {this.renderComments(comment)}
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
}
export default DishDetail;