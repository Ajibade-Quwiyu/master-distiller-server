import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('AdminServers')
export class AdminServer {
  @ApiProperty({ description: 'Primary Key' })
  @PrimaryGeneratedColumn()
  Id: number;

  @ApiProperty({ description: 'Drink Category' })
  @Column({ type: 'varchar', length: 255, name: 'DrinkCategory' })
  drinkCategory: string;

  @ApiProperty({ description: 'Spirit 1' })
  @Column({ type: 'varchar', length: 255, name: 'Spirit1' })
  spirit1: string;

  @ApiProperty({ description: 'Spirit 2' })
  @Column({ type: 'varchar', length: 255, name: 'Spirit2' })
  spirit2: string;

  @ApiProperty({ description: 'Spirit 3' })
  @Column({ type: 'varchar', length: 255, name: 'Spirit3' })
  spirit3: string;

  @ApiProperty({ description: 'Spirit 4' })
  @Column({ type: 'varchar', length: 255, name: 'Spirit4' })
  spirit4: string;

  @ApiProperty({ description: 'Spirit 5' })
  @Column({ type: 'varchar', length: 255, name: 'Spirit5' })
  spirit5: string;

  @ApiProperty({ description: 'Passcode Key' })
  @Column({ type: 'varchar', length: 255, name: 'PasscodeKey' })
  passcodeKey: string;
}
