'use client';
import { JSX, useEffect, useState } from "react";
import {   RatingProps } from "./Rating.props";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import Star from './star.svg';

export const Rating = ({isEditable = false, rating, setRating,  children, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(0).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating:number) => {
        const updatedArray = ratingArray.map((r:JSX.Element,i:number) => {
            return (
                <Icon
                src={Star}
                className={cn("", {
                    "":i < currentRating
                })}
                />
            )
        })
        setRatingArray(updatedArray);
    }
    return (
        <div {...props}>
            {ratingArray.map((r,i) => (<span key={i}>
                {r}
            </span>))}
        </div>
    );
};
