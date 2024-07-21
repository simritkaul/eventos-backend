import { Controller, Post, Body, Get } from '@nestjs/common';
import { EventService } from './event.service';
import { Prisma } from '@prisma/client';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Post('create')
  async create(@Body() eventData: Prisma.EventCreateInput) {
    return this.eventService.createEvent(eventData);
  }

  @Get()
  async findAll() {
    return this.eventService.getAllEvents();
  }
}
