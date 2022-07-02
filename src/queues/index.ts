import CandidateQueue from './candidate.queue';
import EmailQueue from './email.queue';
import LogQueue from './log.queue';
import VoteQueue from './vote.queue';

LogQueue.getInstance();
EmailQueue.getInstance();
CandidateQueue.getInstance();
VoteQueue.getInstance();
