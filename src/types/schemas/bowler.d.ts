/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Bowler {
	/**
	 * Bowler's name
	 */
	name: string;
	/**
	 * Number of overs bowled with decimal, e.g. 15.2
	 */
	overs: string;
	/**
	 * Number of overs where the batsman has not made a run
	 */
	maidenOvers: number;
	/**
	 * Number of runs made off the bowler
	 */
	runs: number;
	/**
	 * The amount of wickets a bowler has made
	 */
	wickets: number;
	/**
	 * Wides and No Balls, [wide, noball]
	 */
	badBalls: any[];
	/**
	 * True if the bowler is currently bowling, false if they are not
	 */
	bowling: boolean;
}
