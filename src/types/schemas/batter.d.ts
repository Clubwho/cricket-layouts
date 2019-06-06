/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Batter {
	/**
	 * Batter's name
	 */
	name: string;
	/**
	 * Total run made
	 */
	runs: number;
	/**
	 * Number of fours made
	 */
	fours: number;
	/**
	 * Number of sixes made
	 */
	sixes: number;
	/**
	 * Number of balls the batter has faced
	 */
	balls: number;
	/**
	 * If populated the player will be shown as out
	 */
	dismissal: string;
	/**
	 * If true the batter is currently on the pitch, false if the batter has yet to bat or has gone out
	 */
	batting: 'WAITING' | 'BATTING' | 'OUT';
	/**
	 * If true the batter is facing the bowler, false if the batter is running
	 */
	facing: boolean;
}
