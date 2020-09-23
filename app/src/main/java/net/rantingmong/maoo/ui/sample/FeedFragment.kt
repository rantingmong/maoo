package net.rantingmong.maoo.ui.sample

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.fragment_feed.*
import net.rantingmong.maoo.R

class FeedFragment : Fragment() {

  companion object {
    fun newInstance() = FeedFragment()
  }

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View? = inflater.inflate(R.layout.fragment_feed, container, false)

  override fun onActivityCreated(savedInstanceState: Bundle?) {
    super.onActivityCreated(savedInstanceState)

    feed.apply {
      adapter = FeedAdapter()
      layoutManager = LinearLayoutManager(context, LinearLayoutManager.VERTICAL, false)
    }
  }
}
