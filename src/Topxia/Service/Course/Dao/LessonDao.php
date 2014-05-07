<?php

namespace Topxia\Service\Course\Dao;

interface LessonDao
{

    public function getLesson($id);

    public function findLessonsByCourseId($courseId);

    public function findLessonIdsByCourseId($courseId);

    public function searchLessons($condition, $orderBy, $start, $limit);

    public function searchLessonCount($conditions);

    public function getLessonCountByCourseId($courseId);

    public function getLessonMaxSeqByCourseId($courseId);

    public function findTimeSlotOccupiedLessonsByCourseId($courseId,$startTime,$endTime);

    public function findLessonsByChapterId($chapterId);

    public function addLesson($course);

    public function updateLesson($id, $fields);

    public function deleteLesson($id);

    public function deleteLessonsByCourseId($courseId);

    public function findLessonsByIds(array $ids);
}