namespace Algorithms
{
    public class Time
    {
        public int _Hours { get; set; }
        public int _Minutes { get; set; }
        public int _Seconds { get; set; }

        public Time(int hours, int minutes, int seconds)
        {
            NormaliseData(hours, minutes, seconds);
        }

        private void NormaliseData(int hours, int minutes, int seconds)
        {
            _Seconds = seconds >= 0 && seconds <= 59 ? seconds : seconds % 60;
            _Minutes = (minutes >= 0 && (minutes + seconds / 60) <= 59) ? minutes + seconds / 60 : (minutes + seconds / 60) % 60;
            _Hours = (hours >= 0 && (hours + minutes / 60) <= 23) ? hours + minutes / 60 : (hours + minutes / 60) % 24;
        }

        public void scale(int seconds)
        {
            seconds += _Seconds;
            NormaliseData(_Hours, _Minutes, seconds);
        }

        public string timeString()
        {
            var hours = _Hours <= 9 ? $"0{_Hours}" : $"{_Hours}";
            var minutes = _Minutes <= 9 ? $"0{_Minutes}" : $"{_Minutes}";
            var seconds = _Seconds <= 9 ? $"0{_Seconds}" : $"{_Seconds}";

            return $"{hours}:{minutes}:{seconds}";
        }
    }
}
