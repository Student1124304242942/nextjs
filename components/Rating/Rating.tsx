'use client';
import { JSX, useEffect, useState, KeyboardEvent } from "react";
import {   RatingProps } from "./Rating.props";
import cn from "classnames";
import { Icon } from "../Icon/Icon";
import Star from './star.svg';

export const Rating = ({isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating])

    const constructRating = (currentRating:number) => {
        const updatedArray = new Array(5).fill(<></>).map((_, i:number) => {
            return (
                <span
                    className={cn({
                            "text-primary": i < currentRating,
                            "text-gray-light": i >= currentRating,
                            "cursor-pointer": isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i+1)}
                    onClick={() => onClick(i+1)}
                >
                    <Icon
                        src={Star}
                        className="transition-colors duration-200"
                        tabIndex={isEditable ? 0:-1}
                        onKeyDown={(e:KeyboardEvent<HTMLImageElement>) => isEditable && handleSpace(i+1, e)}
                    />
                </span>
            )
        })
        setRatingArray(updatedArray);
    }

    const changeDisplay = (i:number) => {
        if(!isEditable){
            return
        }
        constructRating(i);
    }
    const onClick = (i:number) => {
        if(!isEditable || !setRating){
            return
        }
        setRating(i);
    }
    const handleSpace = (i:number, e:KeyboardEvent<HTMLImageElement>) => {
        if(e.code != "Space" || !setRating){
            return;
        }
        setRating(i);
    }
    return (
        <div
            className={cn("flex   gap-1.25", className)}
            onMouseLeave={() => changeDisplay(rating)}
            {...props}
        >
            {ratingArray.map((r,i) => (<span key={i}>
                {r}
            </span>))}
        </div>
    );
};
