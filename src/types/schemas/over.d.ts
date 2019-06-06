/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Over {
	/**
	 * The balls in the past over, any as strings may be included, e.g. [0, 4, Wide, NB, 3, W]
	 */
	over: (number | string)[];
	/**
	 * Number of balls left in the over
	 */
	ballsLeft: number;
	/**
	 * Name of bowler
	 */
	bowler: string;
}
