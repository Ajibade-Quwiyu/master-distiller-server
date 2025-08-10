import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('FlavourWheels')
export class FlavourWheel {
  @ApiProperty({ description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Username' })
  @Column({ type: 'varchar', length: 255 })
  Username: string;

  @ApiProperty({ description: 'Email' })
  @Column({ type: 'varchar', length: 255 })
  Email: string;

  @ApiProperty({ description: 'Spirit 1 Name' })
  @Column({ type: 'varchar', length: 255 })
  Spirit1Name: string;

  @ApiProperty({ description: 'Spirit 2 Name' })
  @Column({ type: 'varchar', length: 255 })
  Spirit2Name: string;

  @ApiProperty({ description: 'Spirit 3 Name' })
  @Column({ type: 'varchar', length: 255 })
  Spirit3Name: string;

  @ApiProperty({ description: 'Spirit 4 Name' })
  @Column({ type: 'varchar', length: 255 })
  Spirit4Name: string;

  @ApiProperty({ description: 'Spirit 5 Name' })
  @Column({ type: 'varchar', length: 255 })
  Spirit5Name: string;

  @ApiProperty({ description: 'Spirit 1 Flavours' })
  @Column({ type: 'int', default: 0 })
  Spirit1Flavours: number;

  @ApiProperty({ description: 'Spirit 2 Flavours' })
  @Column({ type: 'int', default: 0 })
  Spirit2Flavours: number;

  @ApiProperty({ description: 'Spirit 3 Flavours' })
  @Column({ type: 'int', default: 0 })
  Spirit3Flavours: number;

  @ApiProperty({ description: 'Spirit 4 Flavours' })
  @Column({ type: 'int', default: 0 })
  Spirit4Flavours: number;

  @ApiProperty({ description: 'Spirit 5 Flavours' })
  @Column({ type: 'int', default: 0 })
  Spirit5Flavours: number;

  @ApiProperty({ description: 'Spirit 1 Ratings' })
  @Column({ type: 'int', default: 0 })
  Spirit1Ratings: number;

  @ApiProperty({ description: 'Spirit 2 Ratings' })
  @Column({ type: 'int', default: 0 })
  Spirit2Ratings: number;

  @ApiProperty({ description: 'Spirit 3 Ratings' })
  @Column({ type: 'int', default: 0 })
  Spirit3Ratings: number;

  @ApiProperty({ description: 'Spirit 4 Ratings' })
  @Column({ type: 'int', default: 0 })
  Spirit4Ratings: number;

  @ApiProperty({ description: 'Spirit 5 Ratings' })
  @Column({ type: 'int', default: 0 })
  Spirit5Ratings: number;

  @ApiProperty({ description: 'Feedback' })
  @Column({ type: 'text', nullable: true })
  Feedback: string;

  @ApiProperty({ description: 'Overall Rating' })
  @Column({ type: 'int', default: 0 })
  OverallRating: number;
}
