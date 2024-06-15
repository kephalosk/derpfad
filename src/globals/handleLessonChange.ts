import router from "@/router";

export module LessonHandler {
    const handleLessonChange = (option: string) => {
        switch (option) {
            case 'lesson1':
                router.push('/');
                break;
            case 'lesson2':
                router.push('/lesson2');
                break;
            case 'lesson3':
                router.push('/lesson3');
                break;
            default:
        }
    };
}