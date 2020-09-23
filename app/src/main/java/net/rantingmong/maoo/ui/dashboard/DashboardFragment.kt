package net.rantingmong.maoo.ui.dashboard

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.fragment.app.commit
import androidx.fragment.app.viewModels
import kotlinx.android.synthetic.main.fragment_dashboard.*
import net.rantingmong.maoo.R
import net.rantingmong.maoo.shared.viewmodel.MainViewModel
import net.rantingmong.maoo.ui.sample.FeedFragment
import net.rantingmong.maoo.view.MaooMainToolbar

class DashboardFragment : Fragment() {

  companion object {
    fun newInstance() = DashboardFragment()
  }

  private val viewModel: MainViewModel by viewModels()

  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View = inflater.inflate(R.layout.fragment_dashboard, container, false)

  override fun onActivityCreated(savedInstanceState: Bundle?) {
    super.onActivityCreated(savedInstanceState)

    dashboard_toolbar.setToolbarBehavior(object: MaooMainToolbar.Behavior {
      override fun onTabChanged(tab: MaooMainToolbar.Tab) {
        when (tab) {
          MaooMainToolbar.Tab.DROP -> { }
          MaooMainToolbar.Tab.FEED -> { }
          MaooMainToolbar.Tab.USER -> { }
        }
      }
    })

    childFragmentManager.commit {
      replace(R.id.dashboard_container, FeedFragment.newInstance())
    }
  }
}
